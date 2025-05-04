document.addEventListener('DOMContentLoaded', async () => {
    await cargarProyectos();
});
  
async function cargarProyectos() {
    const grid = document.querySelector('.grid');
    const categoria = window.categoria;
    try {
        const [projectsResponse, templateResponse] = await Promise.all([
            fetch(`${categoria}/projects.json`),
            fetch('assets/components/card-projects.html')
        ]);
        if (!projectsResponse.ok) throw new Error('No se pudo cargar projects.json');
        if (!templateResponse.ok) throw new Error('No se pudo cargar el template de tarjetas');
        const proyectos = await projectsResponse.json();
        const template = await templateResponse.text();
        if (proyectos.length === 0) {
            grid.innerHTML = `<p>No hay proyectos para mostrar.</p>`;
            return;
        }
        for (const post of proyectos) {
            try {
                const response = await fetch(`${categoria}/proyectos/${post.file}`);
                if (!response.ok) throw new Error(`No se pudo cargar ${post.file}`);
                const text = await response.text();
                const yamlRegex = /^---[\r\n]+([\s\S]+?)[\r\n]+---[\r\n]+([\s\S]*)$/;
                const match = text.match(yamlRegex);
                if (!match) throw new Error(`Formato YAML incorrecto en ${post.file}`);
                const yamlText = match[1];
                const metadata = {};
                yamlText.split('\n').forEach(line => {
                const [key, ...rest] = line.split(':');
                metadata[key.trim()] = rest.join(':').trim();
                });
                // Reemplazar en el template
                const cardHTML = template
                .replace('{{title}}', metadata.title)
                .replace('{{descripcion}}', metadata.descripcion)
                .replace('{{link}}', `${categoria}/proyectos/?id=${encodeURIComponent(post.file)}`);
                // Insertar en el grid
                grid.insertAdjacentHTML('beforeend', cardHTML);
            } catch (error) {
                console.error(error);
            }
        }
    } catch (error) {
        console.error(error);
        grid.innerHTML = `<p>Error al cargar proyectos.</p>`;
    }
}
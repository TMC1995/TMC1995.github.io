document.addEventListener('DOMContentLoaded', async () => {
    const categoria = window.categoria;
    const params = new URLSearchParams(window.location.search);
    const postFile = params.get('id');
    if (!postFile) {
      document.getElementById('project-title').innerText = 'Error: No se indicó el proyecto.';
      return;
    }
    try {
      const response = await fetch(`${categoria}/proyectos/${postFile}`);
      if (!response.ok) {
          document.getElementById('project-title').innerText = 'Error al cargar el proyecto.';
          throw new Error(`No se pudo cargar el archivo ${postFile}`);
      }
      const text = await response.text();
      const yamlRegex = /^---[\r\n]+([\s\S]+?)[\r\n]+---[\r\n]+([\s\S]*)$/;
      const match = text.match(yamlRegex);
      if (!match) {
        throw new Error('Formato incorrecto del archivo Markdown.');
      }
      const yamlText = match[1];
      const markdownText = match[2];
      const metadata = {};
      yamlText.split('\n').forEach(line => {
        const [key, ...rest] = line.split(':');
        metadata[key.trim()] = rest.join(':').trim();
      });
      document.title = metadata.title || 'Proyecto Educativo';
      document.getElementById('project-title').innerText = metadata.title || 'Proyecto sin título';
      document.getElementById('project-meta').innerText = `Publicado el ${metadata.fechapublicacion || 'Fecha desconocida'}`;
      const htmlContent = marked.parse(markdownText);
      document.getElementById('project-content').innerHTML = htmlContent;
    } catch (error) {
      console.error(error);
      document.getElementById('project-title').innerText = 'Error: ${error}';
    }
  });
  

async function includeComponent(tagName, url) {
  const element = document.querySelector(tagName);
  if (element) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error cargando ${url}: ${response.status}`);
      }
      const html = await response.text();
      element.innerHTML = html;
    } catch (error) {
      console.error(error);
      element.innerHTML = `<p>Error al cargar el componente.</p>`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  includeComponent('header', 'assets/components/header.html');
  includeComponent('footer', 'assets/components/footer.html');
});
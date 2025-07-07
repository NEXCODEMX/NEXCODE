document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // Toggle la clase 'active'
            accordionItem.classList.toggle('active');
            
            // Si el item está activo, calcula y establece la altura; de lo contrario, resetea
            if (accordionItem.classList.contains('active')) {
                // Establece max-height a scrollHeight. Añadimos un pequeño buffer por seguridad
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 50 + "px"; // +50px como buffer
            } else {
                // Resetea max-height a 0 cuando se cierra
                accordionContent.style.maxHeight = "0";
            }
        });
    });
});
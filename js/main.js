
(() =>{

    const hotspots = document.querySelectorAll(".Hotspot");
    const infoBoxes = [
      {
        image: 'images/volume.svg',
        title: 'Powerful High Quality Speakers',
        info: 'Powerful, clear, balanced and high-fidelity Audio with deep bass that you can easily take anywhere with you. With our new technology, no matter the position you lay the speaker in, our Speaker will automatically adjust for the orientation to play the best possible sound. Crystal clear sound quality with no draw backs, and easy to take anywhere with you.'
      },  
      {
        image: 'images/usb.svg',
        title: 'Multiple USB Ports and Headphone Jack',
        info: 'Our Speaker offers a variety of input interfaces for versatile connectivity. Multiple USB ports that match any and all kinds of phone chargers and finally a headphone jack if you wish to connect in any kind of environment, inside or outside.'
      },  
        {
        image: 'images/mirror.svg',
        title: 'Outercasing That Matches All Décor',
        info: 'Neutral coloured outer casing that you can have come in any colour so it easily blends into your home interior without fearing it will stand out against your own personal style, easy to take anywhere with you without worrying about it catching attention.'
      },  
         {
        image: 'images/umbrella.svg',
        title: 'Waterproof Speaker Casing',
        info: 'Waterproof casing to protect your speaker from any and all kinds of spill. The waterproof casing guarantees your speakers safety and ensures any accidentally drops into the pool will keep it functioning, even underwater. Perfect for having your speaker sit on a floatie during a pool party.'
      }
    ]

    function loadInfo() {
        infoBoxes.forEach((infoBox, index) =>{
           let selected = document.querySelector(`#hotspot-${index+1}`);

           const imgElement = document.createElement('img');
           imgElement.src = infoBox.image;

           const titleElement = document.createElement('h2');
           titleElement.textContent = infoBox.title;

           const infoElement = document.createElement('p');
           infoElement.textContent = infoBox.info;

           selected.appendChild(imgElement);
           selected.appendChild(titleElement);
           selected.appendChild(infoElement);
        });
    }
    loadInfo();
})();
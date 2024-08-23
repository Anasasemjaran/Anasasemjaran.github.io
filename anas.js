fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const angkatanDiv = document.getElementById('angkatan');

        data.forEach(uwu => {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = uwu.fotoselfie;
            img.className = 'card-img-top';
            img.alt = uwu.nama;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = uwu.nama;

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerHTML = `
              <strong>NIM:</strong> ${uwu.nim}<br>
              <strong>ALAMAT:</strong> ${uwu.alamat}<br>
              <strong>TTL:</strong> ${uwu.ttl}<br>
              <strong>NO:</strong> ${uwu.no}<br>
              <strong>KELOMPOK:</strong> ${uwu.kelompok}
            `;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(img);
            card.appendChild(cardBody);
            angkatanDiv.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

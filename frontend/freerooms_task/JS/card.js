const mainWrap = document.getElementById("main-wrap");

// fetch data from data.json
fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      // card HTML block for each building.
      const card = `
        <div class="card-wrap">
          <img src="${item.building_picture}" alt="${item.name} building" />
          <div class="available-rooms-wrap">
            <div class="green-dot"></div>
            <div>${item.rooms_available} rooms available</div>
          </div>
          <div class="building-content-wrap">
            <div class="building-name">${item.name}</div>
            <button class="card-button-wrap">
                  <div>View Details</div>
                  <img
                    src="../icons/arrow_forward.png"
                    class="colored-icons"
                    alt="forward_arrow"
                  />
                </button>
          </div>
        </div>
      `;

      // Insert the card HTML into the main wrap.
      mainWrap.insertAdjacentHTML("beforeend", card);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));

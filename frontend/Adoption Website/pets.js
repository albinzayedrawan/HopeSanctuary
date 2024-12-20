const petsData = {
    Bailey: {
      image: "1.jpg",
      thumbnails: ["9.jpg", "12.jpg", "13.jpg"],
      name: "Bailey",
      id: "0001",
      species: "Dog",
      breed: "Labrador Retriever",
      size: "Large",
      age: "1 year",
      gender: "Female",
      color: "Yellow",
      description:
        "Bailey is a loyal companion, loves long walks, and is great with kids. She's looking for a loving family to call her own.",
      vaccinated: "Yes",
      neutered: "Yes",
      medicalConditions: "None",
      adoptionFee: "120 BD",
    },
    Tiger: {
      image: "2.jpg",
      thumbnails: ["2.jpg", "14.jpg", "15.jpg"],
      name: "Tiger",
      id: "0002",
      species: "Cat",
      breed: "Bengal",
      size: "Small",
      age: "2 years",
      gender: "Male",
      color: "Orange and White",
      description:
        "Tiger is a playful and curious cat. He enjoys chasing laser pointers and lounging in sunny spots.",
      vaccinated: "Yes",
      neutered: "Yes",
      medicalConditions: "None",
      adoptionFee: "80 BD",
    },
    Fluffy: {
      image: "8.jpg",
      thumbnails: ["8.jpg", "16.jpg", "17.jpg"],
      name: "Fluffy",
      id: "0010",
      species: "Dog",
      breed: "Golden Retriever",
      size: "Medium",
      age: "5 months",
      gender: "Female",
      color: "Gold",
      description:
        "Fluffy is a lovable puppy full of energy and affection. She's looking for a forever home to match her playful spirit.",
      vaccinated: "Yes",
      neutered: "No",
      medicalConditions: "None",
      adoptionFee: "100 BD",
    },
  };
  
  const urlParams = new URLSearchParams(window.location.search);
  const petName = urlParams.get("name");
  
  if (petsData[petName]) {
    const pet = petsData[petName];
  
    // Set the main image
    const mainImage = document.querySelector(".pet-image img");
    mainImage.src = pet.image;
  
    // Set the thumbnails
    const thumbnailsContainer = document.querySelector(".pet-image .d-flex");
    thumbnailsContainer.innerHTML = pet.thumbnails
      .map(
        (thumb) =>
          `<img src="${thumb}" alt="Thumbnail" class="img-thumbnail me-2" style="width: 60px; height: 60px; cursor: pointer;">`
      )
      .join("");
  
    // Add event listener to thumbnails
    const thumbnails = thumbnailsContainer.querySelectorAll("img");
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        mainImage.src = thumbnail.src; // Change the main image
      });
    });
  
    // Set the pet details
    document.querySelector(".adopt-button").textContent = `Adopt ${pet.name} Now!`;
    document.querySelector(".details-card").innerHTML = `
      <h2>Meet ${pet.name}</h2>
      <p class="mb-1"><strong>Pet ID:</strong> ${pet.id}</p>
      <p class="mb-1"><strong>Species:</strong> ${pet.species}</p>
      <p class="mb-1"><strong>Breed:</strong> ${pet.breed}</p>
      <p class="mb-1"><strong>Size:</strong> ${pet.size}</p>
      <p class="mb-1"><strong>Age:</strong> ${pet.age}</p>
      <p class="mb-1"><strong>Gender:</strong> ${pet.gender}</p>
      <p class="mb-1"><strong>Color:</strong> ${pet.color}</p>
      <h4>About ${pet.name}</h4>
      <p>${pet.description}</p>
      <p><strong>Vaccinated:</strong> ${pet.vaccinated}</p>
      <p><strong>Neutered/Spayed:</strong> ${pet.neutered}</p>
      <p><strong>Medical Conditions:</strong> ${pet.medicalConditions}</p>
      <p><strong>Adoption Fee:</strong> ${pet.adoptionFee}</p>
    `;
  } else {
    document.querySelector(".details-card").innerHTML = `
      <h2 class="fw-bold">Pet Not Found</h2>
      <p>The pet you're looking for does not exist. Please go back and select a valid pet.</p>
    `;
  }
  
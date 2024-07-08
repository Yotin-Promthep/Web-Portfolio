document.addEventListener('DOMContentLoaded', function() {
    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        const productsContainer = document.getElementById('products');
  
        data.forEach(product => {
          const card = document.createElement('div');
          card.classList.add('col-lg-4', 'col-md-6', 'mb-4');
          card.innerHTML = `
            <div class="card h-100">
              <img src="${product.image}" class="card-img-top" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text fw-bold">$${product.price}</p>
                <button class="btn btn-primary view-details" data-bs-toggle="modal" data-bs-target="#productModal" data-product-id="${product.id}">View Details</button>
              </div>
            </div>
          `;
          productsContainer.appendChild(card);
        });
  
        // Handle click on view details button
        const viewDetailButtons = document.querySelectorAll('.view-details');
        viewDetailButtons.forEach(button => {
          button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            fetch(`https://fakestoreapi.com/products/${productId}`)
              .then(response => response.json())
              .then(product => {
                const modalBody = document.getElementById('productDetails');
                modalBody.innerHTML = `
                  <h5>${product.title}</h5>
                  <img src="${product.image}" class="img-fluid mb-3" alt="${product.title}">
                  <p>${product.description}</p>
                  <p class="fw-bold">$${product.price}</p>
                  <p><strong>Category:</strong> ${product.category}</p>
                  <p><strong>Rating:</strong> ${product.rating.rate} (${product.rating.count} reviews)</p>
                `;
              })
              .catch(error => console.error('Error fetching product details:', error));
          });
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });
  
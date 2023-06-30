document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Capturar os valores dos campos
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    var productDescription = document.getElementById("productDescription").value;
    var customerPhone = document.getElementById("customerPhone").value;
  
    // Formatar a mensagem com os dados do produto
    var message = "Nome do produto: " + productName + "\n";
    message += "Preço: " + productPrice + "\n";
    message += "Descrição: " + productDescription;
  
    // Codificar o número de telefone do cliente
    var encodedPhone = encodeURIComponent(customerPhone);
  
    // Criar o link para o WhatsApp com a mensagem pré-preenchida
    var whatsappLink = "https://wa.me/" + encodedPhone + "?text=" + encodeURIComponent(message);
  
    // Redirecionar para o link do WhatsApp
    window.location.href = whatsappLink;
  });
  
document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('pizzaOrder');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

return (
  <form data-netlify="true" name="pizzaOrder" method="post" onSubmit={handleSubmit}>
    <input type="hidden" name="form-name" value="pizzaOrder" />
    <label>What order did the pizza give to the pineapple?
      <input name="order" type="text" onChange={handleChange} />
    </label>
    <input type="submit"/>
  </form>
)


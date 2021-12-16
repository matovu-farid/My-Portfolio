const saveFormData = ()=>{
    const form = document.querySelector('#contact-form')
    const formData = new FormData(form)
    let object = {}
    Array.from(formData.entries()).forEach(entry=>{
      
      object[entry[0]]=entry[1]
      })
      
      window.localStorage.setItem('form-storage',JSON.stringify(object))
  }
  const attachListener = (input)=>{
    input.addEventListener('input',saveFormData)
}

  const onInput = ()=>{
      const inputs = document.querySelectorAll('.input');
      inputs.forEach(attachListener)
  }
  onInput();
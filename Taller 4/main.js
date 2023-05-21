// Funtions

// Limitar número de caracteres en nombre
function limit(element) {
  let max_chars = 25;

  if (element.value.length > max_chars) {
    element.value = element.value.substr(0, max_chars);
  }
}
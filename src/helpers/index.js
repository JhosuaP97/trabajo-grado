export function handleChangeMultiSelect({
  value,
  e,
  options,
  componentName,
  setState,
  state,
}) {
  if (e.name === componentName) {
    if (e.action === "select-option" && e.option.value === "*") {
      setState({
        ...state,
        [e.name]: options,
      });
    } else if (e.action === "clear") {
      setState({
        ...state,
        [e.name]: [],
      });
    } else if (e.action === "remove-value") {
      setState({
        ...state,
        [e.name]: value.filter((option) => option.value !== "*"),
      });
    } else {
      setState({
        ...state,
        [e.name]: value,
      });
    }
  }
}

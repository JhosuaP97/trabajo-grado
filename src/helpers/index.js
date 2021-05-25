export function handleChangeMultiSelect({
  value,
  event,
  options,
  componentName,
  setState,
  state,
}) {
  if (event.name === componentName) {
    if (event.action === "select-option" && event.option.value === "*") {
      setState({
        ...state,
        [event.name]: options,
      });
    } else if (event.action === "clear") {
      setState({
        ...state,
        [event.name]: [],
      });
    } else if (event.action === "remove-value") {
      setState({
        ...state,
        [event.name]: value.filter((option) => option.value !== "*"),
      });
    } else {
      setState({
        ...state,
        [event.name]: value,
      });
    }
  }
}

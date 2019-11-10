const enhance = compose(
  withUserData, // <- injects user's data using propName `data`
  withPostData // <- injects post data using propName `data`
)

// Define a static method
WrappedComponent.staticMethod = function() {
  /*...*/
}
// Now apply a HOC
const EnhancedComponent = enhance(WrappedComponent)

// The enhanced component has no static method
typeof EnhancedComponent.staticMethod === 'undefined' // true

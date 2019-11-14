let prevArgs

const funkySum = (...args) => {
  if (Math.random() > 0.5 && prevArgs) {
    const [a, b] = args

    prevArgs = args

    return a + b
  }

  const [a, b] = prevArgs

  return a + b
}

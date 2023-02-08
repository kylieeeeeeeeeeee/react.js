export const formatPrice = (number) => {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP' }).format(number / 5)
}


export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
} 

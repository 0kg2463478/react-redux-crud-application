const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

/* actionクリエイター */
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

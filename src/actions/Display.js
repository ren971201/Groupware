export default function invertVisible(visible) {
    return {
        type: 'INVERT_VISIBLE',
        visible: visible
    }
}
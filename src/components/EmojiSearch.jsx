import EmojiData from "./EmojiData.json"

export const EmojiSearch = (value) => {
    const lowerValue = value.toLowerCase();
    const response = [];
    EmojiData.map(item => {
        if (item.keywords.includes(lowerValue)) {
            response.push(item);
        }
    })
    return value === "" ? response : response.slice(0, 24);
}
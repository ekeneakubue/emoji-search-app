import { EmojiSearch } from "./EmojiSearch";
import Item from "./Item";

const SearchResult = ({ valueEmoji, darkMode }) => {
    const arrayEmojis = EmojiSearch(valueEmoji);

    return (
        <section className="container results">
            {
                arrayEmojis && arrayEmojis.map(item => (
                    <Item
                        key={item.title}
                        title={item.title}
                        emoji={item.symbol}
                        darkMode={darkMode}
                    />
                ))
            }
            
        </section>
    );
}
 
export default SearchResult;
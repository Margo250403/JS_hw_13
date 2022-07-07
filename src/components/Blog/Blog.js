import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Popup from "../Popup";
import useBlog from "./hooks/useBlog";


function Blog(){
    const { addNote, isClosePopup, notes } = useBlog();

    return (
        <div>
            <Popup isClosePopup={isClosePopup}>
                <NoteForm onSubmit={addNote} />
            </Popup>

            <NoteList notes={notes} />
        </div>
    );
}

export default Blog;
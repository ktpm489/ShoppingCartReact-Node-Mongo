
//GET A BOOK
export function getBooks() {
    return {
        type :'GET_BOOKS'
    }
}

// POST A BOOK
export function postBooks(book){
    return {
        type :'POST_BOOKS'
    }
}
// DELETE A BOOK
export function deleteBooks(id){
    return {
        type :'DELETE_BOOK'
    }
}
// UPDATE A BOOK
export function updateBooks(book){
    return {
        type :'UPDATE_BOOK',
        payload : book
    }
}
// RESET  FROM BUTTON
export function resetButton(){
    return {
        type :'RESET_BUTTON'
    }
}
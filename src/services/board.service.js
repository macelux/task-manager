import axios from "axios"

export default {
    getAll() {
        return axios.get("/api/boards").then(res => res.data)
    },
    findById(boardId) {
        return axios.get("/api/boards/" + boardId).then(res => res.data)
    },
    update(req, res) {
        Board.findByIdAndUpdate(req.params.boardId, { title: req.body.title }, (err, board) => {
            this._handleResponse(err, board, res)
        })
    }
}
export const Validate = {
    checkText: (key, value) => {
        if (value.length == 0) {
            alert(key + " cannot be empty")
            return false
        }
        else if (value.length < 8) {
            alert(key + " must be 8 charaters or long")
            return false
        }

        return true
    }
}
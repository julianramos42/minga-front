import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export default function Alert() {

    const visible = useSelector(store => store.alert.visible)
    const icon = useSelector(store => store.alert.icon)
    const text = useSelector(store => store.alert.text)

    if(visible){
        Swal.fire({
            icon: icon,
            text: text,
        })
    }

    return <></>
}
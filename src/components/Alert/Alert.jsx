import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import alertActions from '../../store/Alert/actions'

export default function Alert() {

    const visible = useSelector(store => store.alert.visible)
    const icon = useSelector(store => store.alert.icon)
    const text = useSelector(store => store.alert.text)
    const dispatch = useDispatch()
    const { close } = alertActions

    if(visible){
        Swal.fire({
            icon: icon,
            text: text,
        }).then( () => {
            dispatch(close({icon: "success", text: ""}))
        } )
    }

    return <></>
}
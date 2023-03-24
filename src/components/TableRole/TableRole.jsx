import { useEffect, useState } from 'react'
import iconPanel from '../../images/Union.png'
import './tablerole.css'
import { useDispatch, useSelector } from 'react-redux';
import action from '../../store/PanelAdmin/actions'
import H2 from '../H2/H2'


const { captureState, read_all_authors } = action;


export default function TableRole() {

    const [active, setActive] = useState(true);
    const [companie, setCompanie] = useState(true);
    const dispatch = useDispatch();
    let author = useSelector(store => store.panelAdmin.authors)

    console.log(author)
    //boton activo o desativo
    function IsActive() {
        setActive(true)
        dispatch(captureState({ buttonState: false }))
    }
    function NotActive() {
        setActive(false)
        dispatch(captureState({ buttonState: true }))
    }
    //boton companies o author
    function IsCompanie() {
        setCompanie(true)
        dispatch(captureState({ buttonState: false }))
    }
    function IsAuthor() {
        setCompanie(false)
        dispatch(captureState({ buttonState: true }))
        dispatch(read_all_authors())
    }

    useEffect(() => {
        setCompanie(!author)
    }, [])

    return (
        <>




            <table>
                <thead>
                    <div className="boton-companie-active">
                        <button className={companie ? 'boton-isCompanie prueba-companie' : 'boton-isCompanie'} onClick={IsCompanie} >Companies</button>
                        <button className={!companie ? 'boton-isCompanie prueba-companie' : 'boton-isCompanie'} onClick={IsAuthor} >Authors</button>
                    </div>
                </thead>
                {
                    companie === true
                        ?
                        <table>
                            <tbody className='body-table'>



                                <tr >
                                    <td className="iconPanel"><img src={iconPanel} /></td>
                                    <td className="colum1">nombre companie</td>
                                    <td className="colum2">web companie</td>
                                    <td className="colum3"><img src="#" alt="fotoperfil" /></td>
                                    <div className='panel-active'>
                                        <input className={active ? 'boton-option boton-entities' : 'boton-option'} onClick={IsActive} ></input>
                                        <input className={!active ? 'boton-option boton-entities' : 'boton-option'} onClick={NotActive}></input>
                                    </div>
                                </tr>


                            </tbody>
                        </table>
                        :
                        <table>
                            {
                                author?.length > 0
                                    ?
                                    author.map((author) => {
                                        return (

                                            <tbody className='body-table'>
                                                <tr >
                                                    <td className="iconPanel"><img src={iconPanel} /></td>
                                                    <td className="colum1">{author.name}</td>
                                                    <td className="colum2">{author.city}</td>
                                                    <td className="colum3"><img className='photo-perfil-author' src={author.photo} alt="fotoperfil" /></td>
                                                    <div className='panel-active'>
                                                        <input className={active ? 'boton-option boton-entities' : 'boton-option'} onClick={IsActive} ></input>
                                                        <input className={!active ? 'boton-option boton-entities' : 'boton-option'} onClick={NotActive}></input>
                                                    </div>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                    :
                                    <H2 text='No Authors founded' />
                            }

                        </table>
                }
            </table>


        </>
    )
}
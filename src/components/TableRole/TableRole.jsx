import { useEffect, useState } from 'react'
import './tablerole.css'
import { useDispatch, useSelector } from 'react-redux';
import action from '../../store/PanelAdmin/actions'
import H2 from '../H2/H2'
import CompanyTable from './Company';
import AuthorActive from './AuthorActive';


const { captureState, read_all_authors, read_all_company } = action;


export default function TableRole() {

    const [author, setAuthor] = useState(false)
    const [companie, setCompanie] = useState(true);
    const [controler, setControler] = useState(false);
    const dispatch = useDispatch();
    let activeAuthors = useSelector(store => store.panelAdmin.activeAuthors)
    let inactiveAuthors = useSelector(store => store.panelAdmin.inactiveAuthors)
    let activeCompanies = useSelector(store => store.panelAdmin.activeCompanies)
    let inactiveCompanies = useSelector(store => store.panelAdmin.inactiveCompanies)
    //boton companies o author
    function IsCompanie() {
        setCompanie(true)
        dispatch(captureState({ buttonState: false }))
    }
    function IsAuthor() {
        setCompanie(false)
        dispatch(captureState({ buttonState: true }))
    }

    useEffect(() => {
        dispatch(read_all_authors())
        dispatch(read_all_company())
    }, [])

    useEffect(() => {
        if (activeAuthors?.length === 0 && inactiveAuthors?.length === 0) {
            setAuthor(true)
        } else {
            setAuthor(false)
        }
    }, [activeAuthors, inactiveAuthors])

    useEffect(() => {
        if (activeCompanies?.length === 0 && inactiveCompanies?.length === 0) {
            setControler(true)
        } else {
            setControler(false)
        }
    }, [activeCompanies, inactiveCompanies])


    return (
        <>
            <div className='table-all'>
                <thead>
                    <tr className="boton-companie-active">
                        <th className={companie ? 'boton-isCompanie prueba-companie' : 'boton-isCompanie'} onClick={IsCompanie} >Companies</th>
                        <th className={!companie ? 'boton-isCompanie prueba-companie' : 'boton-isCompanie'} onClick={IsAuthor} >Authors</th>
                    </tr>
                </thead>
                {
                    companie === true
                        ?
                        <table>
                            {
                                inactiveCompanies?.length > 0
                                &&

                                inactiveCompanies.map((company, i) => {
                                    return (
                                        <CompanyTable company={company} key={i} />
                                    )
                                })
                            }
                            {
                                activeCompanies?.length > 0
                                &&
                                activeCompanies.map((company, i) => {
                                    return (

                                        <CompanyTable company={company} key={i} />
                                    )
                                })
                            }
                            {/* {companie === true && <H2 text='No Company founded' />} */}

                        </table>
                        :
                        <table>
                            {
                                inactiveAuthors?.length > 0
                                &&

                                inactiveAuthors.map((author, i) => {
                                    return (

                                        <AuthorActive author={author} key={i} />
                                    )
                                })
                            }
                            {
                                activeAuthors?.length > 0
                                &&
                                activeAuthors.map((author, i) => {
                                    return (

                                        <AuthorActive author={author} key={i} />
                                    )
                                })
                            }
                            {author === true && <H2 text='No Author founded' />}

                        </table>
                }
            </div>
        </>
    )
}
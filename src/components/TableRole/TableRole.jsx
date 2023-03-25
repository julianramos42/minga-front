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
    const dispatch = useDispatch();
    let activeAuthors = useSelector(store => store.panelAdmin.activeAuthors)
    let inactiveAuthors = useSelector(store => store.panelAdmin.inactiveAuthors)
    let company = useSelector(store => store.panelAdmin.companies)

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
        }else{
            setAuthor(false)
        }
    }, [activeAuthors, inactiveAuthors])


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
                            {
                                company?.length > 0
                                    ?
                                    company.map((company) => {
                                        return (
                                            <CompanyTable company={company} />
                                        )
                                    })
                                    :
                                    <H2 text='No Company founded' />
                            }
                        </table>
                        :
                        <table>
                            {
                                inactiveAuthors?.length > 0
                                    &&

                                    inactiveAuthors.map((author) => {
                                        return (

                                            <AuthorActive author={author} />
                                        )
                                    })
                            }
                            {
                                activeAuthors?.length > 0
                                    &&
                                    activeAuthors.map((author) => {
                                        return (

                                            <AuthorActive author={author} />
                                        )
                                    })
                            }
                            {author === true &&   <H2 text='No Author founded' /> }

                        </table>
                }
            </table>
        </>
    )
}
import './NNF.css'

const NameNoteForm = () => {
    return (
        <div>
            <p className='f3'>
                {'Name your "Note"'}
            </p>
            <div className='center'>
                
                    <div className='form pa4 br3 shadow-5'>
                        <label className='f3 b' style={{color:'black'}} for="name">Name (0 to 9 characters):</label>
                        <input type="text" id="name" name="name" className='f4 pa2 w-70 center'
                        required
                        minlength="0" maxlength="9" size="10"></input>
                        <button className='grow w-30 f4 link ph3 pv2 b dib white center bg-green'>Named!</button>
                </div>
                
                
            </div>
        </div>
    )
}

export default NameNoteForm;
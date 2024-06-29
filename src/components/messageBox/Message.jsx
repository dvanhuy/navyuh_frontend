import parse from 'html-react-parser';

const Message = ({children}) => {
    return ( 
        <div>
            {parse(children)}
        </div>
     );
}
 
export default Message;
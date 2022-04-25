import Message from '../Message';

function MessageList(props) {
  const messagesElems = props.messages.map(
    ({ author, message, isImportant }) => (

        <Message
          key={`${author}-${isImportant}-${message}`}
          author={author}
          message={message}
          isImportant={isImportant}
          id={'test'}
        />

    )
  );
  return <ul>{messagesElems}</ul>;
}

export default MessageList;

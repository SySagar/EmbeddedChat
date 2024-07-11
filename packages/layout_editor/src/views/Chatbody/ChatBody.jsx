import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@embeddedchat/ui-elements';
import { useChatbodyStyles } from './ChatBody.styles';
import MessageList from '../MessageList/MessageList';

const ChatBody = () => {
  const styles = useChatbodyStyles();

  return (
    <Box css={styles.chatbodyContainer} className="ec-chat-body">
      <MessageList />
    </Box>
  );
};

export default ChatBody;

ChatBody.propTypes = {
  anonymousMode: PropTypes.bool,
  showRoles: PropTypes.bool,
};

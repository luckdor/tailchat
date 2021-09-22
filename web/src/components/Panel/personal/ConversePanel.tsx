import { ChatBox } from '@/components/ChatBox';
import React from 'react';
import {
  ChatConverseState,
  t,
  useAppSelector,
  useDMConverseName,
} from 'tailchat-shared';
import { PanelCommonHeader } from '../common/Header';

const ConversePanelHeader: React.FC<{ converse: ChatConverseState }> =
  React.memo(({ converse }) => {
    const name = useDMConverseName(converse);

    return (
      <PanelCommonHeader actions={[]}>
        {t('与 {{name}} 的会话', { name })}
      </PanelCommonHeader>
    );
  });
ConversePanelHeader.displayName = 'ConversePanelHeader';

interface ConversePanelProps {
  converseId: string;
}
export const ConversePanel: React.FC<ConversePanelProps> = React.memo(
  ({ converseId }) => {
    const converse = useAppSelector(
      (state) => state.chat.converses[converseId]
    );

    return (
      <div className="flex flex-col overflow-hidden flex-1">
        {converse && <ConversePanelHeader converse={converse} />}

        <div className="flex-1 overflow-hidden">
          <ChatBox converseId={converseId} isGroup={false} />
        </div>
      </div>
    );
  }
);
ConversePanel.displayName = 'ConversePanel';
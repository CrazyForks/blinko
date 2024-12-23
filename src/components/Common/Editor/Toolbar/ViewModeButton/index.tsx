import { IconButton } from '../IconButton';
import { useTranslation } from 'react-i18next';
import { eventBus } from '@/lib/event';
import { ViewMode } from '@mdxeditor/editor'

interface Props {
  viewMode: ViewMode;
}

export const ViewModeButton = ({ viewMode }: Props) => {
  const { t } = useTranslation();

  return (
    <div className='!ml-auto'
      onClick={() => {
        const nextMode = viewMode === 'source' ? 'rich-text' : 'source';
        eventBus.emit('editor:setViewMode', nextMode);
      }}
    >
      <IconButton
        tooltip={viewMode === 'source' ? t('preview-mode') : t('source-code')}
        icon={viewMode === 'source' ? 'grommet-icons:form-view' : 'tabler:source-code'}
      />
    </div >
  );
}; 
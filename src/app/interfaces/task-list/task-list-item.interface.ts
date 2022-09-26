import { Tag } from '../tag/tag.interface';
import { Button } from '../button/button.interface';

export interface TaskListItem {
    color?: string;
    title?: string;
    subtitle?: string;
    tags?: Tag [];
    buttons?: Button [];
}

import content from '../../content/resume.json';
import { HomeIcon, NotebookIcon, FolderKanbanIcon } from 'lucide-react';
const icons = [HomeIcon, FolderKanbanIcon, NotebookIcon];
export const DATA = { ...content, navbar: content.navbar.map((item, index) => ({ ...item, icon: icons[index] })) };

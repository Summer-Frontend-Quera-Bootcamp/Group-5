import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { DotsIcon } from '../../../icons';
import { AddIcon, DownloadIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

const DotsMenu = (): JSX.Element => {
    return (
        <Menu>
            <MenuButton as="button" w='24px' h='24px'>
                <DotsIcon w='20px' h='20px' />
            </MenuButton>
            <MenuList>
                <MenuItem icon={<EditIcon />} >
                    ویرایش نام ستون
                </MenuItem>
                <MenuItem icon={<AddIcon />} >
                    افزودن تسک
                </MenuItem>
                <MenuItem icon={<DownloadIcon />} >
                    آرشیو تمام تک ها
                </MenuItem>
                <MenuItem icon={<DeleteIcon />} color='#E53E3E' >
                    حذف ستون
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default DotsMenu;
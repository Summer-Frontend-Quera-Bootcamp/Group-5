import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import React from 'react';
import { FlagIcon, CloseIcon } from '../../icons';

const PriorityList: React.FC = () => {
  const menuItems = [
    { label: 'فوری', icon: <FlagIcon w="20px" h="20px" color="red" /> },
    { label: 'بالا', icon: <FlagIcon w="20px" h="20px" color="yellow" /> },
    { label: 'متوسط', icon: <FlagIcon w="20px" h="20px" color="blue" /> },
    { label: 'پایین', icon: <FlagIcon w="20px" h="20px" color="gray" /> },
    { label: 'حذف اولویت', icon: <CloseIcon w="20px" h="20px" color="red" /> }
  ];

  return (
    <Menu>
      <MenuButton
        as={Button}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          width: 'fit-content',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <FlagIcon w="20px" h="20px" color="gray" style={{ borderRadius: '50%', border: '1px dashed' }} />
        </span>
      </MenuButton>
      <MenuList
        style={{
          maxHeight: '240px',
          overflowY: 'auto',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.16)',
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} style={{ marginTop: '3px' }}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {item.icon}
              <span style={{ marginLeft: '10px', marginRight: '10px' }}>{item.label}</span>
            </span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PriorityList;

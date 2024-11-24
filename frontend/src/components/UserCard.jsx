import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const UserCard = ({ user }) => {
  const handleRoleChange = (role) => {
    console.log('role change requested', role)
    // TODO: API CALL TO CHANGE ROLE
  };

  const handleBanToggle = () => {
    console.log('ban button clicked', !user.banned)
    // TODO: API CALL TO BAN USER
  }

  const handleLockToggle = () => {
    console.log('lock button clicked', !user.locked)
    // TODO: API CALL TO LOCK USER
  }

  const roleOptions = ['admin', 'candidate', 'recruiter']

  return (
    <div className='w-full flex flex-row items-center space-x-4 p-4 border rounded-md'>
      <Avatar>
        <AvatarImage src={user.imageUrl} />
        <AvatarFallback>
          {user.name ? user.name[0].toUpperCase() : "?"}
        </AvatarFallback>
      </Avatar>

      <div className='flex-grow'>
        {user.emailAddresses && user.emailAddresses.length > 0
          ? user.emailAddresses[0].emailAddress
          : "No email available"}
      </div>

      <div>
        {user.publicMetadata && user.publicMetadata.role && (
          <Select
            onValueChange={handleRoleChange}
            defaultValue={user.publicMetadata.role}
            disabled={user.publicMetadata.role === "admin"}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              {roleOptions.map(role => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      <div className='flex items-center space-x-2'>
        <Button 
          variant={user.banned ? "destructive" : "outline"}
          size="sm"
          onClick={handleBanToggle}
        >
          {user.banned ? 'Unban' : 'Ban'}
        </Button>
      </div>

      <div className='flex items-center space-x-2'>
        <Button
          variant={user.locked ? "destructive" : "outline"}
          size="sm"
          onClick={handleLockToggle}
        >
          {user.locked ? 'Unlock' : 'Lock'}
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
import Avatar from 'react-avatar';
import {AvatarGroupContent, AvatarContent} from './avatar-group.styles'

interface Avatar {
  name: string
  url: string 
}
interface AvatarProps {
  avatarsData: Avatar[]
}
export const AvatarGroup: React.FC<AvatarProps> = ({avatarsData}) => {
  return (
    <AvatarGroupContent>
      {avatarsData.map((avatar, index) => (
        <AvatarContent key={index}>
          <Avatar
            name={avatar.name}
            size="24"
            round={true}
            src={avatar.url}
          />
        </AvatarContent>
      ))}
    </AvatarGroupContent>
  )
}
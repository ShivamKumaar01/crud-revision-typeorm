import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class GroupService {
  constructor(
   @InjectRepository(Group) private readonly groupRepository: Repository<Group>,
      @InjectRepository(User) private userRepository: Repository<User>
      // @InjectRepository(UserGroup) private groupRepository: Repository<Group>,
    ) { }
  create(createGroupDto: CreateGroupDto) {
    const group:Group=new Group();
    group.title=createGroupDto.title
    console.log(group.title,"this is title")
    group.description=createGroupDto.description
    group.admin=createGroupDto.admin
    return this.groupRepository.save(group)

    // return 'This action adds a new group';
  }

  findAll() {
    return this.groupRepository.find()
  }

  findOne(id: number) {
    return this.groupRepository.findOneBy({id})
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    const value=this.groupRepository.update({id},{...updateGroupDto})
    return {message:"user updated successfully"}
  }

  // remove(id: number) {
  //   return this.groupRepository.delete(id)
  // }
 findUsers(id: number) {
  return this.groupRepository.findOne({
    where: { id },
    relations: ['users'],
  });
}


async removeGroup(id: number) {
  const group = await this.groupRepository.findOne({
    where: { id },
    relations: ['users'],
  });

  if (!group) throw new Error('Group not found');

  // Remove relation explicitly
  group.users = [];
  await this.groupRepository.save(group);

  return this.groupRepository.remove(group); // ✅ Removes group & relation entries
}

}

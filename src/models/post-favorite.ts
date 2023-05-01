import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

import { BaseEntity, User } from '../../nodejs-package-starter/dist'
import generateEntityId from '../../nodejs-package-starter/dist/utils/generate-entity-id'

@Entity()
export class PostFavorite extends BaseEntity {
  @Column({ type: 'varchar', nullable: true })
  title: string | null

  @Column({ type: 'text', nullable: true })
  text: string | null

  @Column({ type: 'varchar', nullable: false })
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ referencedColumnName: 'id', name: 'user_id' })
  user: User

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, 'p_cmt')
  }
}

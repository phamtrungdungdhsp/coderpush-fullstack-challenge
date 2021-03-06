import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { EAction } from '../../constants/Enum'
import User from './User'

export default class Action extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public host: number

  @column()
  public target: number

  @column()
  public action: EAction
  
  @column.dateTime({ autoCreate: true, columnName: 'created_at', serializeAs: 'createdAt' })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at', serializeAs: 'updatedAt' })
  public updatedAt: DateTime

  @hasOne(() => User, { localKey: 'target', foreignKey: 'id' })
  public user: HasOne<typeof User>
}

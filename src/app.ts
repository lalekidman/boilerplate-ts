require('dotenv').config({path: `${__dirname}/../.env`})
import * as express from 'express'
import {Request, Response, NextFunction} from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import * as passport from 'passport'
import * as HttpStatus from 'http-status-codes'
import * as morgan from 'morgan'
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser'

import flash = require('connect-flash')

import {Server as SocketServer} from 'socket.io'
import * as socketio from 'socket.io'
import {createServer, Server} from 'http'
const SECRET = 'TOTAL_SECRET_POWERED_BY_KYOO_PH'
// import * as MongoOplog from 'mongo-oplog'
// import {} from 'mongo-oplog'
// import { Db } from 'mongodb';

class App {
  public app: any
  public io: any
  public HttpServer: Server
  //@ts-ignore
  public server: SocketServer
  private DBURI: string
  private Port:(number | string)
  constructor () {
    this.app = express()
    this.HttpServer = createServer(this.app)
    this.Port = process.env['PORT'] || 346
    this.DBURI = `mongodb://${process.env.DBURI}/SAMPLE_DB`
    console.log('db: ', this.DBURI)
    this._init()
  }
  private monthRoutes (): void {
    // Where the router import
  }
  private initSocket (server: any):void {
    this.io = socketio(server)
    this.io.on('connect' , (socket: socketio.Socket) => {
      console.log('someone is connected, ', socket.handshake.headers.authorization)
      // setTimeout(() => {
      //   socket.disconnect();
      // }, 3000)
      socket.on('disconnect' , () => {
        console.log('user:', socket.id)
        console.log('user disconnected')
      })
    })
  }
  private initMongodb () {
    mongoose.connect(this.DBURI, {useNewUrlParser: true}).then((res) => {
      console.log('Successfully connected to database.')
    }).catch((err) => {
      console.log('Failed to connect to the database. Error: ', err)
    })
  }
  public listen (port?: number):void {
    this.server = this.app.listen(port || this.Port, () => {
      console.log(`Listening to port ${this.Port}`)
    })
    this.initSocket(this.server)
  }
  private _init () { 
    
    this.app.use(morgan('dev'))
    this.app.use(express.static(path.join(__dirname, '../views')))
    this.app.set('views', path.join(__dirname, '../views'))
    this.app.set('view engine', 'hbs')
    this.app.use(cookieParser())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(session({
      secret: SECRET,
      saveUninitialized: true,
      resave: true
    }))
    this.app.use(flash())
    this.app.use(passport.initialize())
    this.app.use(passport.session())
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*')
      // res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept')
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
        return res.sendStatus(HttpStatus.OK)
      }
      next()
    })
    this.monthRoutes()
    this.initMongodb()
  }
}
const app = new App()
app.listen()
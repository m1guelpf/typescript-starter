import dotenv from 'dotenv'

dotenv.config()

async function main() {
	console.log('hello, world!')
}

main()
	.then(() => process.exit(0))
	.catch(err => {
		console.error(err)
		process.exit(1)
	})

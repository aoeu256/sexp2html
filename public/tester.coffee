

#assert = (s) ->
	#operators = ['==', '>', '<', '<=', '>=']
	#tok = s.split(' ')

	#throw Error('')
log = {}

log.logs = {'main':{}}
log.curlog = 'main'
log.skip = []
log = (s, logN=null) ->
	log.logs[logN || log.curlog].push(s)

log.printLog = (skip=null) ->
	$logDiv = $('<div>').appendTo('body')
	$pre = $logDiv('<pre>').appendTo($logDiv)
	skip = skip || log.skip
	for name, contents of log.logs
		if name not in skip
			h1 = $("<h1>", text: name)
			h1.appendTo($pre)
			for i in contents
				$("<h4>", text:i).appendTo($pre)

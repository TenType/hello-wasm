(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (memory $0 0)
 (export "fib" (func $assembly/index/fib))
 (export "memory" (memory $0))
 (func $assembly/index/fib (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 0
  i32.le_s
  if
   i32.const 0
   return
  end
  i32.const 1
  local.set $1
  loop $while-continue|0
   local.get $0
   i32.const 1
   i32.sub
   local.tee $0
   if
    local.get $1
    local.get $2
    i32.add
    local.get $1
    local.set $2
    local.set $1
    br $while-continue|0
   end
  end
  local.get $1
 )
)

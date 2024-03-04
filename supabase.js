
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rbarilgklevjlsqgkwsj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiYXJpbGdrbGV2amxzcWdrd3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NzY5MTUsImV4cCI6MjAyNTA1MjkxNX0.mpG5zwuZirH3VnHQ_CyjylIdxyI92qWo3xLMzET_EpA'
const supabase = createClient(supabaseUrl, supabaseKey)


async function getSuspects() {
const { data, error } = await supabase
  .from('suspect')
  .select()
  return { data, error }
}


async function getSuspect(id) {
    //   SELECT * FROM notes WHERE id=id
let { data, error } = await supabase
  .from('suspect')
  .select("*")
  .eq('id', id)

  return { data, error }
}

async function addSuspect(info){
    const { data, error } = await supabase
  .from('suspect')
  .insert(info)
  .select()

  return { data, error }
}




export {getSuspects, getSuspect ,addSuspect}


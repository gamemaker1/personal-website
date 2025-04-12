// a list of pronouns and prepositions from the english wikipedia, grouped
// by category. note that there are only two indefinite articles - a, an.

const pronouns = {
  personal: ["i", "me", "you", "he", "him", "she", "her", "it", "we", "us", "they", "them"],
  possessive: ["my", "mine", "your", "yours", "his", "her", "hers", "its", "our", "ours", "their", "theirs"],
  reflexive: ["myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves"],
  demonstrative: ["this", "that", "these", "those"],
  interrogative: ["who", "whom", "whose", "which", "what"],
  indefinite: ["anyone", "anybody", "anything", "someone", "somebody", "something", "everyone", "everybody", "everything", "no one", "nobody", "nothing", "each", "either", "neither", "few", "many", "several", "all", "some", "any", "most", "none", "one", "another", "others", "both"],
  reciprocal: ["each other", "one another"],
  archaic: ["thou", "thee", "thy", "thine", "thyself", "ye"],
  nonstandard: ["y'all", "youse", "you all", "yeerselves", "y'all's selves"]
}

const prepositions = {
  complex: ["according to", "ahead of", "apart from", "as for", "as of", "as per", "as to", "aside from", "because of", "close to", "due to", "except for", "far from", "inside of", "instead of", "near to", "next to", "on account of", "on top of", "out of", "outside of", "owing to", "prior to", "subsequent to", "such as", "thanks to", "up to"],
  simple: ["a", "aboard", "about", "above", "abreast", "absent", "across", "after", "against", "ago", "ahead", "along", "alongside", "amid", "amidst", "among", "amongst", "anti", "around", "as", "astride", "at", "atop", "bar", "barring", "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "but", "by", "circa", "concerning", "considering", "despite", "down", "during", "except", "excluding", "following", "for", "from", "in", "including", "inside", "into", "like", "minus", "near", "notwithstanding", "of", "off", "on", "onto", "opposite", "out", "outside", "over", "past", "per", "plus", "regarding", "round", "save", "since", "than", "through", "throughout", "till", "to", "toward", "towards", "under", "underneath", "unlike", "until", "up", "upon", "versus", "via", "with", "within", "without", "worth"],
}

const articles = { a: ["a"], an: ["an"] }

// these regular expressions match the required types of tokens. the length
// of the matches array is the count of each type.
const patterns = {
  letters: /[a-zA-Z]/g,
  words: /\b\w+\b/g,
  spaces: / /g,
  newlines: /(\n|\r\n)/g,
  symbols: /[\!@#$%^&*\-_+=?\/:;,.<>~\(\)\[\]\{\}\'\"`]/g,
}

// gets the length of an array - returns 0 if it is undefined.
export const coalesce = (num) => num?.length ?? 0;

// parse text and calculate statistics.
export const tokenize = (text) => {
  const stats = {
    general: {},
    pronouns: {},
    prepositions: {},
    articles: {},
  }

  // run each regex for the count of letters, words, etc.
  for (const [type, pattern] of Object.entries(patterns))
    stats.general[type] = coalesce(text.match(pattern))

  for (const [property, group] of Object.entries({ pronouns, prepositions, articles })) {
    // for the pronouns, prepositions and articles, create regex groups with them.
    // then find every possible match in the entire document, case insensitively.
    const regexp = Object.entries(group).map(([name, values]) =>
      `(?<${name}>\\b(?:${values.join('|')})\\b)`
    ).join('|')
    const matches = text.matchAll(new RegExp(regexp, 'gi'))

    // initialize the count of each category of the group to zero.
    const counts = Object.fromEntries(
      Object.keys(group).map(k => [k, 0])
    )
    
    // for each match, find out which group it matched and increment its count.
    for (const match of matches) {
      const name = Object.keys(match.groups).find(
        (name) => !!match.groups[name]
      )
      counts[name] += 1
    }

    stats[property] = counts
  }

  return stats
}

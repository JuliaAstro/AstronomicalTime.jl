var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#AstroTime-1",
    "page": "Home",
    "title": "AstroTime",
    "category": "section",
    "text": "Astronomical time keeping in Julia"
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "The package can be installed through Julia\'s package manager:Pkg.clone(\"https://github.com/JuliaAstro/AstroTime.jl\")"
},

{
    "location": "index.html#Quickstart-1",
    "page": "Home",
    "title": "Quickstart",
    "category": "section",
    "text": "# Create an Epoch based on the TT (Terrestial Time) scale\ntt = TTEpoch(\"2018-01-01T12:00:00\")\n\n# Transform to UTC (Universal Time Coordinated)\nutc = UTCEpoch(tt)\n\n# Transform to TDB (Barycentric Dynamical Time)\nutc = TDBEpoch(utc)Read the API docs."
},

{
    "location": "tutorial.html#",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "page",
    "text": ""
},

{
    "location": "tutorial.html#Tutorial-1",
    "page": "Tutorial",
    "title": "Tutorial",
    "category": "section",
    "text": "This tutorial will walk you through the features and functionality of AstroTime.jl. Everything in this package revolves around the Epoch data type. Epochs are basically a high-precision, time scale-aware version of the DateTime type from Julia\'s standard library. This means that while DateTime timestamps are always assumed to be based on Universal Time (UT), Epochs can be created in several pre-defined time scales or custom user-defined time scales."
},

{
    "location": "tutorial.html#Creating-Epochs-1",
    "page": "Tutorial",
    "title": "Creating Epochs",
    "category": "section",
    "text": "You construct Epoch instances similar to DateTime instance, for example by using date and time components. The main difference is that you need to supply the time scale to be used. Out of the box, the following time scales are defined:TAI: International Atomic Time\nUTC: Coordinated Universal Time\nUT1: Universal Time\nTT: Terrestrial Time\nTCG: Geocentric Coordinate Time\nTCB: Barycentric Coordinate Time\nTDB: Barycentric Dynamical Timeusing AstroTime\n\nep = Epoch{UTC}(2018, 2, 6, 20, 45, 0.0)\n\n# The following shorthand also works\nep = UTCEpoch(2018, 2, 6, 20, 45, 0.0)\n\n# Or in another time scale\nep = TAIEpoch(2018, 2, 6, 20, 45, 0.0)You can also parse an Epoch from a string. AstroTime.jl uses the DateFormat type and specification language from the Dates module from Julia\'s standard library. For example:ep = UTCEpoch(\"2018-02-06T20:45:00.000\", \"yyyy-mm-ddTHH:MM:SS.sss\")\n\n# The format string above `yyyy-mm-ddTHH:MM:SS.sss` is also the default format.\n# Thus, this also works...\nep = UTCEpoch(\"2018-02-06T20:45:00.000\")\n\nimport Dates\n\n# You can also reuse the format string\ndf = Dates.dateformat\"dd.mm.yyyy HH:MM\"\n\nutc = UTCEpoch(\"06.02.2018 20:45\", df)\ntai = TAIEpoch(\"06.02.2018 20:45\", df)There are two additional character codes supported.t: This character code is parsed as the time scale.\nD: This character code is parsed as the day number within a year.# The time scale can be omitted from the constructor because it is already\n# defined in the input string\njulia> Epoch(\"2018-02-06T20:45:00.000 UTC\", \"yyyy-mm-ddTHH:MM:SS.sss ttt\")\n2018-02-06T20:45:00.000 UTC\n\n# February 6 is day number 37\njulia> UTCEpoch(\"2018-037T20:45:00.000\", \"yyyy-DDDTHH:MM:SS.sss\")\n2018-02-06T20:45:00.000 UTCWhen printing Epochs, you can format the output in the same way.julia> ep = UTCEpoch(2018, 2, 6, 20, 45, 0.0)\n2018-02-06T20:45:00.000 UTC\njulia> AstroTime.format(ep, \"dd.mm.yyyy HH:MM ttt\")\n06.02.2018 20:45 UTC"
},

{
    "location": "tutorial.html#Working-with-Epochs-and-Periods-1",
    "page": "Tutorial",
    "title": "Working with Epochs and Periods",
    "category": "section",
    "text": "You can shift an Epoch in time by adding or subtracting a Period to it."
},

{
    "location": "tutorial.html#Converting-Between-Time-Scales-1",
    "page": "Tutorial",
    "title": "Converting Between Time Scales",
    "category": "section",
    "text": ""
},

{
    "location": "tutorial.html#Working-with-Julian-Dates-1",
    "page": "Tutorial",
    "title": "Working with Julian Dates",
    "category": "section",
    "text": ""
},

{
    "location": "tutorial.html#Converting-to-Standard-Library-Types-1",
    "page": "Tutorial",
    "title": "Converting to Standard Library Types",
    "category": "section",
    "text": ""
},

{
    "location": "tutorial.html#Defining-Custom-Time-Scales-1",
    "page": "Tutorial",
    "title": "Defining Custom Time Scales",
    "category": "section",
    "text": ""
},

{
    "location": "api.html#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api.html#AstroTime.@timescale-Tuple{Symbol,Symbol,Vararg{Any,N} where N}",
    "page": "API",
    "title": "AstroTime.@timescale",
    "category": "macro",
    "text": "@timescale scale\n\nDefine a new timescale and the corresponding Epoch type alias.\n\nExample\n\njulia> @timescale GMT ep tai_offset(UTC, ep)\n\njulia> GMT <: TimeScale\ntrue\n\njulia> GMTEpoch\nEpoch{GMT,T} where T\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.Epoch",
    "page": "API",
    "title": "AstroTime.Epochs.Epoch",
    "category": "type",
    "text": "Epoch(str[, format])\n\nConstruct an Epoch from a string str. Optionally a format definition can be passed as a DateFormat object or as a string. In addition to the character codes supported by DateFormat the character code D is supported which is parsed as \"day of year\" (see the example below) and the character code t which is parsed as the time scale.  The default format is yyyy-mm-ddTHH:MM:SS.sss ttt.\n\nNote: Please be aware that this constructor requires that the time scale is part of str, e.g. 2018-02-06T00:00 UTC. Otherwise use an explicit constructor, e.g. Epoch{UTC}.\n\nExample\n\njulia> Epoch(\"2018-02-06T20:45:00.0 UTC\")\n2018-02-06T20:45:00.000 UTC\n\njulia> Epoch(\"2018-037T00:00 UTC\", \"yyyy-DDDTHH:MM ttt\")\n2018-02-06T00:00:00.000 UTC\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.Epoch-Union{Tuple{AbstractString}, Tuple{S}, Tuple{AbstractString,DateFormat}} where S",
    "page": "API",
    "title": "AstroTime.Epochs.Epoch",
    "category": "method",
    "text": "Epoch{S}(str[, format]) where S\n\nConstruct an Epoch with time scale S from a string str. Optionally a format definition can be passed as a DateFormat object or as a string. In addition to the character codes supported by DateFormat the code D can be used which is parsed as \"day of year\" (see the example below).  The default format is yyyy-mm-ddTHH:MM:SS.sss.\n\nExample\n\njulia> Epoch{UTC}(\"2018-02-06T20:45:00.0\")\n2018-02-06T20:45:00.000 UTC\n\njulia> Epoch{UTC}(\"February 6, 2018\", \"U d, y\")\n2018-02-06T00:00:00.000 UTC\n\njulia> Epoch{UTC}(\"2018-037T00:00\", \"yyyy-DDDTHH:MM\")\n2018-02-06T00:00:00.000 UTC\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.Epoch-Union{Tuple{Epoch{S1,T} where T}, Tuple{S2}, Tuple{S1}} where S2 where S1",
    "page": "API",
    "title": "AstroTime.Epochs.Epoch",
    "category": "method",
    "text": "Epoch{S2}(ep::Epoch{S1}) where {S1, S2}\n\nConvert ep, an Epoch with time scale S1, to an Epoch with time scale S2.\n\nExamples\n\njulia> ep = TTEpoch(2000,1,1)\n2000-01-01T00:00:00.000 TT\n\njulia> TAIEpoch(ep)\n1999-12-31T23:59:27.816 TAI\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.Epoch-Union{Tuple{Int64,Int64,Int64}, NTuple{4,Int64}, NTuple{5,Int64}, Tuple{Int64,Int64,Int64,Int64,Int64,Float64}, Tuple{S}} where S",
    "page": "API",
    "title": "AstroTime.Epochs.Epoch",
    "category": "method",
    "text": "Epoch{S}(year, month, day, hour=0, minute=0, second=0.0) where S\n\nConstruct an Epoch with time scale S from date and time components.\n\nExample\n\njulia> Epoch{UTC}(2018, 2, 6, 20, 45, 0.0)\n2018-02-06T20:45:00.000 UTC\n\njulia> Epoch{UTC}(2018, 2, 6)\n2018-02-06T00:00:00.000 UTC\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.Epoch-Union{Tuple{T}, Tuple{T}, Tuple{S}, Tuple{T,T}} where T<:Number where S",
    "page": "API",
    "title": "AstroTime.Epochs.Epoch",
    "category": "method",
    "text": "Epoch{S}(jd1::T, jd2::T=zero(T); origin=:j2000) where {S, T}\n\nConstruct an Epoch with time scale S from a Julian date (optionally split into jd1 and jd2). origin determines the variant of Julian date that is used. Possible values are:\n\n:j2000: J2000 Julian date, starts at 2000-01-01T12:00\n:julian: Julian date, starts at -4712-01-01T12:00\n:mjd: Modified Julian date, starts at 1858-11-17T00:00\n\nExamples\n\njulia> Epoch{UTC}(0.0, 0.5)\n2000-01-02T00:00:00.000 UTC\n\njulia> Epoch{UTC}(2.451545e6, origin=:julian)\n2000-01-01T12:00:00.000 UTC\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TAIEpoch-Tuple{AbstractString}",
    "page": "API",
    "title": "AstroTime.Epochs.TAIEpoch",
    "category": "method",
    "text": "TAIEpoch(str[, format])\n\nConstruct a TAIEpoch from a string str. Optionally a format definition can be passed as a DateFormat object or as a string. In addition to the character codes supported by DateFormat the code D is supported which is parsed as \"day of year\" (see the example below). The default format is yyyy-mm-ddTHH:MM:SS.sss.\n\nExample\n\njulia> TAIEpoch(\"2018-02-06T20:45:00.0\")\n2018-02-06T20:45:00.000 TAI\n\njulia> TAIEpoch(\"February 6, 2018\", \"U d, y\")\n2018-02-06T00:00:00.000 TAI\n\njulia> TAIEpoch(\"2018-37T00:00\", \"yyyy-DDDTHH:MM\")\n2018-02-06T00:00:00.000 TAI\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TAIEpoch-Tuple{Int64,Int64,Int64}",
    "page": "API",
    "title": "AstroTime.Epochs.TAIEpoch",
    "category": "method",
    "text": "TAIEpoch(year, month, day, hour=0, minute=0, second=0.0)\n\nConstruct a TAIEpoch from date and time components.\n\nExample\n\njulia> TAIEpoch(2018, 2, 6, 20, 45, 0.0)\n2018-02-06T20:45:00.000 TAI\n\njulia> TAIEpoch(2018, 2, 6)\n2018-02-06T00:00:00.000 TAI\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TAIEpoch-Tuple{Number,Number}",
    "page": "API",
    "title": "AstroTime.Epochs.TAIEpoch",
    "category": "method",
    "text": "TAIEpoch(jd1::T, jd2::T=zero(T); origin=:j2000) where T\n\nConstruct a TAIEpoch from a Julian date (optionally split into jd1 and jd2). origin determines the variant of Julian date that is used. Possible values are:\n\n:j2000: J2000 Julian date, starts at 2000-01-01T12:00\n:julian: Julian date, starts at -4712-01-01T12:00\n:mjd: Modified Julian date, starts at 1858-11-17T00:00\n\nExamples\n\njulia> TAIEpoch(0.0, 0.5)\n2000-01-02T00:00:00.000 TAI\n\njulia> TAIEpoch(2.451545e6, origin=:julian)\n2000-01-01T12:00:00.000 TAI\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TCBEpoch-Tuple{AbstractString}",
    "page": "API",
    "title": "AstroTime.Epochs.TCBEpoch",
    "category": "method",
    "text": "TCBEpoch(str[, format])\n\nConstruct a TCBEpoch from a string str. Optionally a format definition can be passed as a DateFormat object or as a string. In addition to the character codes supported by DateFormat the code D is supported which is parsed as \"day of year\" (see the example below). The default format is yyyy-mm-ddTHH:MM:SS.sss.\n\nExample\n\njulia> TCBEpoch(\"2018-02-06T20:45:00.0\")\n2018-02-06T20:45:00.000 TCB\n\njulia> TCBEpoch(\"February 6, 2018\", \"U d, y\")\n2018-02-06T00:00:00.000 TCB\n\njulia> TCBEpoch(\"2018-37T00:00\", \"yyyy-DDDTHH:MM\")\n2018-02-06T00:00:00.000 TCB\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TCBEpoch-Tuple{Int64,Int64,Int64}",
    "page": "API",
    "title": "AstroTime.Epochs.TCBEpoch",
    "category": "method",
    "text": "TCBEpoch(year, month, day, hour=0, minute=0, second=0.0)\n\nConstruct a TCBEpoch from date and time components.\n\nExample\n\njulia> TCBEpoch(2018, 2, 6, 20, 45, 0.0)\n2018-02-06T20:45:00.000 TCB\n\njulia> TCBEpoch(2018, 2, 6)\n2018-02-06T00:00:00.000 TCB\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TCBEpoch-Tuple{Number,Number}",
    "page": "API",
    "title": "AstroTime.Epochs.TCBEpoch",
    "category": "method",
    "text": "TCBEpoch(jd1::T, jd2::T=zero(T); origin=:j2000) where T\n\nConstruct a TCBEpoch from a Julian date (optionally split into jd1 and jd2). origin determines the variant of Julian date that is used. Possible values are:\n\n:j2000: J2000 Julian date, starts at 2000-01-01T12:00\n:julian: Julian date, starts at -4712-01-01T12:00\n:mjd: Modified Julian date, starts at 1858-11-17T00:00\n\nExamples\n\njulia> TCBEpoch(0.0, 0.5)\n2000-01-02T00:00:00.000 TCB\n\njulia> TCBEpoch(2.451545e6, origin=:julian)\n2000-01-01T12:00:00.000 TCB\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TCGEpoch-Tuple{AbstractString}",
    "page": "API",
    "title": "AstroTime.Epochs.TCGEpoch",
    "category": "method",
    "text": "TCGEpoch(str[, format])\n\nConstruct a TCGEpoch from a string str. Optionally a format definition can be passed as a DateFormat object or as a string. In addition to the character codes supported by DateFormat the code D is supported which is parsed as \"day of year\" (see the example below). The default format is yyyy-mm-ddTHH:MM:SS.sss.\n\nExample\n\njulia> TCGEpoch(\"2018-02-06T20:45:00.0\")\n2018-02-06T20:45:00.000 TCG\n\njulia> TCGEpoch(\"February 6, 2018\", \"U d, y\")\n2018-02-06T00:00:00.000 TCG\n\njulia> TCGEpoch(\"2018-37T00:00\", \"yyyy-DDDTHH:MM\")\n2018-02-06T00:00:00.000 TCG\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TCGEpoch-Tuple{Int64,Int64,Int64}",
    "page": "API",
    "title": "AstroTime.Epochs.TCGEpoch",
    "category": "method",
    "text": "TCGEpoch(year, month, day, hour=0, minute=0, second=0.0)\n\nConstruct a TCGEpoch from date and time components.\n\nExample\n\njulia> TCGEpoch(2018, 2, 6, 20, 45, 0.0)\n2018-02-06T20:45:00.000 TCG\n\njulia> TCGEpoch(2018, 2, 6)\n2018-02-06T00:00:00.000 TCG\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TCGEpoch-Tuple{Number,Number}",
    "page": "API",
    "title": "AstroTime.Epochs.TCGEpoch",
    "category": "method",
    "text": "TCGEpoch(jd1::T, jd2::T=zero(T); origin=:j2000) where T\n\nConstruct a TCGEpoch from a Julian date (optionally split into jd1 and jd2). origin determines the variant of Julian date that is used. Possible values are:\n\n:j2000: J2000 Julian date, starts at 2000-01-01T12:00\n:julian: Julian date, starts at -4712-01-01T12:00\n:mjd: Modified Julian date, starts at 1858-11-17T00:00\n\nExamples\n\njulia> TCGEpoch(0.0, 0.5)\n2000-01-02T00:00:00.000 TCG\n\njulia> TCGEpoch(2.451545e6, origin=:julian)\n2000-01-01T12:00:00.000 TCG\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TDBEpoch-Tuple{AbstractString}",
    "page": "API",
    "title": "AstroTime.Epochs.TDBEpoch",
    "category": "method",
    "text": "TDBEpoch(str[, format])\n\nConstruct a TDBEpoch from a string str. Optionally a format definition can be passed as a DateFormat object or as a string. In addition to the character codes supported by DateFormat the code D is supported which is parsed as \"day of year\" (see the example below). The default format is yyyy-mm-ddTHH:MM:SS.sss.\n\nExample\n\njulia> TDBEpoch(\"2018-02-06T20:45:00.0\")\n2018-02-06T20:45:00.000 TDB\n\njulia> TDBEpoch(\"February 6, 2018\", \"U d, y\")\n2018-02-06T00:00:00.000 TDB\n\njulia> TDBEpoch(\"2018-37T00:00\", \"yyyy-DDDTHH:MM\")\n2018-02-06T00:00:00.000 TDB\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TDBEpoch-Tuple{Int64,Int64,Int64}",
    "page": "API",
    "title": "AstroTime.Epochs.TDBEpoch",
    "category": "method",
    "text": "TDBEpoch(year, month, day, hour=0, minute=0, second=0.0)\n\nConstruct a TDBEpoch from date and time components.\n\nExample\n\njulia> TDBEpoch(2018, 2, 6, 20, 45, 0.0)\n2018-02-06T20:45:00.000 TDB\n\njulia> TDBEpoch(2018, 2, 6)\n2018-02-06T00:00:00.000 TDB\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TDBEpoch-Tuple{Number,Number}",
    "page": "API",
    "title": "AstroTime.Epochs.TDBEpoch",
    "category": "method",
    "text": "TDBEpoch(jd1::T, jd2::T=zero(T); origin=:j2000) where T\n\nConstruct a TDBEpoch from a Julian date (optionally split into jd1 and jd2). origin determines the variant of Julian date that is used. Possible values are:\n\n:j2000: J2000 Julian date, starts at 2000-01-01T12:00\n:julian: Julian date, starts at -4712-01-01T12:00\n:mjd: Modified Julian date, starts at 1858-11-17T00:00\n\nExamples\n\njulia> TDBEpoch(0.0, 0.5)\n2000-01-02T00:00:00.000 TDB\n\njulia> TDBEpoch(2.451545e6, origin=:julian)\n2000-01-01T12:00:00.000 TDB\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TTEpoch-Tuple{AbstractString}",
    "page": "API",
    "title": "AstroTime.Epochs.TTEpoch",
    "category": "method",
    "text": "TTEpoch(str[, format])\n\nConstruct a TTEpoch from a string str. Optionally a format definition can be passed as a DateFormat object or as a string. In addition to the character codes supported by DateFormat the code D is supported which is parsed as \"day of year\" (see the example below). The default format is yyyy-mm-ddTHH:MM:SS.sss.\n\nExample\n\njulia> TTEpoch(\"2018-02-06T20:45:00.0\")\n2018-02-06T20:45:00.000 TT\n\njulia> TTEpoch(\"February 6, 2018\", \"U d, y\")\n2018-02-06T00:00:00.000 TT\n\njulia> TTEpoch(\"2018-37T00:00\", \"yyyy-DDDTHH:MM\")\n2018-02-06T00:00:00.000 TT\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TTEpoch-Tuple{Int64,Int64,Int64}",
    "page": "API",
    "title": "AstroTime.Epochs.TTEpoch",
    "category": "method",
    "text": "TTEpoch(year, month, day, hour=0, minute=0, second=0.0)\n\nConstruct a TTEpoch from date and time components.\n\nExample\n\njulia> TTEpoch(2018, 2, 6, 20, 45, 0.0)\n2018-02-06T20:45:00.000 TT\n\njulia> TTEpoch(2018, 2, 6)\n2018-02-06T00:00:00.000 TT\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.TTEpoch-Tuple{Number,Number}",
    "page": "API",
    "title": "AstroTime.Epochs.TTEpoch",
    "category": "method",
    "text": "TTEpoch(jd1::T, jd2::T=zero(T); origin=:j2000) where T\n\nConstruct a TTEpoch from a Julian date (optionally split into jd1 and jd2). origin determines the variant of Julian date that is used. Possible values are:\n\n:j2000: J2000 Julian date, starts at 2000-01-01T12:00\n:julian: Julian date, starts at -4712-01-01T12:00\n:mjd: Modified Julian date, starts at 1858-11-17T00:00\n\nExamples\n\njulia> TTEpoch(0.0, 0.5)\n2000-01-02T00:00:00.000 TT\n\njulia> TTEpoch(2.451545e6, origin=:julian)\n2000-01-01T12:00:00.000 TT\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.UT1Epoch-Tuple{AbstractString}",
    "page": "API",
    "title": "AstroTime.Epochs.UT1Epoch",
    "category": "method",
    "text": "UT1Epoch(str[, format])\n\nConstruct a UT1Epoch from a string str. Optionally a format definition can be passed as a DateFormat object or as a string. In addition to the character codes supported by DateFormat the code D is supported which is parsed as \"day of year\" (see the example below). The default format is yyyy-mm-ddTHH:MM:SS.sss.\n\nExample\n\njulia> UT1Epoch(\"2018-02-06T20:45:00.0\")\n2018-02-06T20:45:00.000 UT1\n\njulia> UT1Epoch(\"February 6, 2018\", \"U d, y\")\n2018-02-06T00:00:00.000 UT1\n\njulia> UT1Epoch(\"2018-37T00:00\", \"yyyy-DDDTHH:MM\")\n2018-02-06T00:00:00.000 UT1\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.UT1Epoch-Tuple{Int64,Int64,Int64}",
    "page": "API",
    "title": "AstroTime.Epochs.UT1Epoch",
    "category": "method",
    "text": "UT1Epoch(year, month, day, hour=0, minute=0, second=0.0)\n\nConstruct a UT1Epoch from date and time components.\n\nExample\n\njulia> UT1Epoch(2018, 2, 6, 20, 45, 0.0)\n2018-02-06T20:45:00.000 UT1\n\njulia> UT1Epoch(2018, 2, 6)\n2018-02-06T00:00:00.000 UT1\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.UT1Epoch-Tuple{Number,Number}",
    "page": "API",
    "title": "AstroTime.Epochs.UT1Epoch",
    "category": "method",
    "text": "UT1Epoch(jd1::T, jd2::T=zero(T); origin=:j2000) where T\n\nConstruct a UT1Epoch from a Julian date (optionally split into jd1 and jd2). origin determines the variant of Julian date that is used. Possible values are:\n\n:j2000: J2000 Julian date, starts at 2000-01-01T12:00\n:julian: Julian date, starts at -4712-01-01T12:00\n:mjd: Modified Julian date, starts at 1858-11-17T00:00\n\nExamples\n\njulia> UT1Epoch(0.0, 0.5)\n2000-01-02T00:00:00.000 UT1\n\njulia> UT1Epoch(2.451545e6, origin=:julian)\n2000-01-01T12:00:00.000 UT1\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.UTCEpoch-Tuple{AbstractString}",
    "page": "API",
    "title": "AstroTime.Epochs.UTCEpoch",
    "category": "method",
    "text": "UTCEpoch(str[, format])\n\nConstruct a UTCEpoch from a string str. Optionally a format definition can be passed as a DateFormat object or as a string. In addition to the character codes supported by DateFormat the code D is supported which is parsed as \"day of year\" (see the example below). The default format is yyyy-mm-ddTHH:MM:SS.sss.\n\nExample\n\njulia> UTCEpoch(\"2018-02-06T20:45:00.0\")\n2018-02-06T20:45:00.000 UTC\n\njulia> UTCEpoch(\"February 6, 2018\", \"U d, y\")\n2018-02-06T00:00:00.000 UTC\n\njulia> UTCEpoch(\"2018-37T00:00\", \"yyyy-DDDTHH:MM\")\n2018-02-06T00:00:00.000 UTC\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.UTCEpoch-Tuple{Int64,Int64,Int64}",
    "page": "API",
    "title": "AstroTime.Epochs.UTCEpoch",
    "category": "method",
    "text": "UTCEpoch(year, month, day, hour=0, minute=0, second=0.0)\n\nConstruct a UTCEpoch from date and time components.\n\nExample\n\njulia> UTCEpoch(2018, 2, 6, 20, 45, 0.0)\n2018-02-06T20:45:00.000 UTC\n\njulia> UTCEpoch(2018, 2, 6)\n2018-02-06T00:00:00.000 UTC\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.UTCEpoch-Tuple{Number,Number}",
    "page": "API",
    "title": "AstroTime.Epochs.UTCEpoch",
    "category": "method",
    "text": "UTCEpoch(jd1::T, jd2::T=zero(T); origin=:j2000) where T\n\nConstruct a UTCEpoch from a Julian date (optionally split into jd1 and jd2). origin determines the variant of Julian date that is used. Possible values are:\n\n:j2000: J2000 Julian date, starts at 2000-01-01T12:00\n:julian: Julian date, starts at -4712-01-01T12:00\n:mjd: Modified Julian date, starts at 1858-11-17T00:00\n\nExamples\n\njulia> UTCEpoch(0.0, 0.5)\n2000-01-02T00:00:00.000 UTC\n\njulia> UTCEpoch(2.451545e6, origin=:julian)\n2000-01-01T12:00:00.000 UTC\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.AstroDates.j2000-Tuple{Any,Epoch}",
    "page": "API",
    "title": "AstroTime.AstroDates.j2000",
    "category": "method",
    "text": "j2000(scale, ep)\n\nReturns the J2000 Julian date for epoch ep within a specific time scale.\n\nExample\n\njulia> j2000(TAI, TTEpoch(2000, 1, 1, 12, 0, 32.184))\n0.0 days\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.AstroDates.j2000-Tuple{Epoch}",
    "page": "API",
    "title": "AstroTime.AstroDates.j2000",
    "category": "method",
    "text": "j2000(ep)\n\nReturns the J2000 Julian date for epoch ep.\n\nExample\n\njulia> j2000(UTCEpoch(2000, 1, 1, 12))\n0.0 days\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.AstroDates.julian-Tuple{Any,Epoch}",
    "page": "API",
    "title": "AstroTime.AstroDates.julian",
    "category": "method",
    "text": "julian(scale, ep)\n\nReturns the Julian Date for epoch ep within a specific time scale.\n\nExample\n\njulia> julian(TAI, TTEpoch(2000, 1, 1, 12, 0, 32.184))\n2.451545e6 days\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.AstroDates.julian-Tuple{Epoch}",
    "page": "API",
    "title": "AstroTime.AstroDates.julian",
    "category": "method",
    "text": "julian(ep)\n\nReturns the Julian Date for epoch ep.\n\nExample\n\njulia> julian(UTCEpoch(2000, 1, 1, 12))\n2.451545e6 days\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.AstroDates.julian_split-Tuple{Any,Epoch}",
    "page": "API",
    "title": "AstroTime.AstroDates.julian_split",
    "category": "method",
    "text": "julian_split(scale, ep)\n\nReturns the two-part Julian date for epoch ep within a specific time scale, which is a tuple consisting of the Julian day number and the fraction of the day.\n\nExample\n\njulia> julian_split(TAI, TTEpoch(2000, 1, 1, 12, 0, 32.184))\n(2.451545e6 days, 0.0 days)\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.AstroDates.julian_split-Tuple{Epoch}",
    "page": "API",
    "title": "AstroTime.AstroDates.julian_split",
    "category": "method",
    "text": "julian_split(ep)\n\nReturns the two-part Julian date for epoch ep, which is a tuple consisting of the Julian day number and the fraction of the day.\n\nExample\n\njulia> julian_split(UTCEpoch(2000, 1, 2))\n(2.451545e6 days, 0.5 days)\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.modified_julian-Tuple{Any,Epoch}",
    "page": "API",
    "title": "AstroTime.Epochs.modified_julian",
    "category": "method",
    "text": "modified_julian(scale, ep)\n\nReturns the Modified Julian Date for epoch ep within a specific time scale.\n\nExample\n\njulia> modified_julian(TAI, TTEpoch(2000, 1, 1, 12, 0, 32.184))\n51544.5 days\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.modified_julian-Tuple{Epoch}",
    "page": "API",
    "title": "AstroTime.Epochs.modified_julian",
    "category": "method",
    "text": "modified_julian(ep)\n\nReturns the Modified Julian Date for epoch ep.\n\nExample\n\njulia> modified_julian(UTCEpoch(2000, 1, 1, 12))\n51544.5 days\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.now-Tuple{}",
    "page": "API",
    "title": "AstroTime.Epochs.now",
    "category": "method",
    "text": "now()\n\nGet the current date and time as a UTCEpoch.\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.tai_offset-Tuple{BarycentricDynamicalTime,Any,Any,Any,Any}",
    "page": "API",
    "title": "AstroTime.Epochs.tai_offset",
    "category": "method",
    "text": "tai_offset(TDB, ep, elong, u, v)\n\nTest\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Epochs.tai_offset-Tuple{BarycentricDynamicalTime,Any}",
    "page": "API",
    "title": "AstroTime.Epochs.tai_offset",
    "category": "method",
    "text": "tai_offset(TDB, ep)\n\nReturns the difference TDB-TAI in seconds at the epoch ep.\n\nThis routine is accurate to ~40 microseconds in the interval 1900-2100.\n\nNote: An accurate transformation between TDB and TT depends on the trajectory of the observer. For two observers fixed on Earth\'s surface the quantity TDB-TT can differ by as much as ~4 microseconds. See tai_offset(TDB, ep, elong, u, v).\n\nReferences\n\nhttps://www.cv.nrao.edu/~rfisher/Ephemerides/times.html#TDB\nIssue #26\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Periods.Period",
    "page": "API",
    "title": "AstroTime.Periods.Period",
    "category": "type",
    "text": "Period{U}(Δt)\n\nA Period object represents a time interval of Δt with a TimeUnit of U. Periods can be constructed via the shorthand syntax shown in the examples below.\n\nExamples\n\njulia> 3.0seconds\n3.0 seconds\n\njulia> 1.0minutes\n1.0 minutes\n\njulia> 12hours\n12 hours\n\njulia> days_per_year = 365\n365\njulia> days_per_year * days\n365 days\n\njulia> 10.0years\n10.0 years\n\njulia> 1centuries\n1 century\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.Periods.TimeUnit",
    "page": "API",
    "title": "AstroTime.Periods.TimeUnit",
    "category": "type",
    "text": "All time units are subtypes of the abstract type TimeUnit. The following time units are defined:\n\nSecond\nMinute\nHour\nDay\nYear\nCentury\n\n\n\n\n\n"
},

{
    "location": "api.html#AstroTime.TimeScales.TimeScale",
    "page": "API",
    "title": "AstroTime.TimeScales.TimeScale",
    "category": "type",
    "text": "All timescales are subtypes of the abstract type TimeScale. The following timescales are defined:\n\nUTC — Coordinated Universal Time\nUT1 — Universal Time\nTAI — International Atomic Time\nTT — Terrestrial Time\nTCG — Geocentric Coordinate Time\nTCB — Barycentric Coordinate Time\nTDB — Barycentric Dynamical Time\n\n\n\n\n\n"
},

{
    "location": "api.html#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "DocTestSetup = quote\n    using AstroTime\nendModules = [AstroTime, AstroTime.Epochs, AstroTime.Periods, AstroTime.TimeScales]\nPrivate = false"
},

]}